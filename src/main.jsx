import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import avatar from './avatar-custom.png';
import { github, projects } from './projects.js';
import { details } from './project-details.js';
import { english } from './translations.js';
import { ProjectStudy } from './ProjectStudy.jsx';
import { socialIcons } from './social-icons.js';
import './style.css';

const socialLinks = [
  { name: 'GitHub', href: github },
  { name: 'Facebook', href: 'https://www.facebook.com/mitu2211' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@sora_22110' },
  { name: 'Instagram', href: 'https://www.instagram.com/mtue.2211/' },
];

const filters = ['Tất cả', 'Backend API', 'Dashboard'];
const areas = [
  ['Backend & API', 'Mình xây dựng các luồng như lưu bài, đặt hàng và đặt lịch khám, từ thao tác của người dùng đến dữ liệu phía máy chủ.', ['Node.js', 'Express', 'JavaScript']],
  ['Dữ liệu ứng dụng', 'Mình làm việc với dữ liệu người dùng, hồ sơ khám và thống kê doanh thu tùy theo bài toán của từng dự án.', ['MongoDB', 'Mongoose']],
  ['Dashboard quản trị', 'Trong Charity Ledger, mình phát triển dashboard và kết nối các tác vụ duyệt chiến dịch, KYC và kiểm tra giao dịch.', ['React', 'Next.js', 'TypeScript', 'viem']],
];

function Tags({ items, t }) {
  return <ul className="tags" aria-label={t("Công nghệ")}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function ProjectVisual({ project, t }) {
  const flow = details[project.theme].flow;
  return (
    <div className={`art ${project.theme}`} aria-hidden="true">
      <span className="art-caption">{t("Minh họa luồng chức năng")}</span>
      <div className="scene">
        <div className="scene-base" />
        <div className="scene-screen">
          <div className="scene-header"><i /><i /><i /><b>{project.name}</b></div>
          <div className="scene-body">
            {flow.map((step, index) => (
              <div className="scene-row" key={step}><span>{index + 1}</span><b>{t(step)}</b><i /></div>
            ))}
          </div>
        </div>
        <div className="scene-token">{project.symbol}</div>
        <div className="scene-chip"><span />{t(flow[2])}</div>
      </div>
    </div>
  );
}

function ProjectCard({ project, language, t }) {
  return (
    <article className="project">
      <ProjectVisual project={project} t={t} />
      <div className="project-copy">
        <p className="label">{t(project.domain)}</p>
        <h3>{project.name}</h3>
        <p className="muted">{t(project.description)}</p>
        <Tags t={t} items={project.stack} />
        <div className="project-actions">

          {project.repo && <a className="repo-link" href={`${github}/${project.repo}`}>{t("Xem mã nguồn")}</a>}
        </div>
      </div>
      <ProjectStudy project={project} language={language} t={t} />
    </article>
  );
}

function readPreference(key, fallback, allowed) {
  try {
    const value = localStorage.getItem(key);
    return allowed.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function App() {
  const [language, setLanguage] = useState(() => readPreference('portfolio-language', 'vi', ['vi', 'en']));
  const [theme, setTheme] = useState(() => readPreference('portfolio-theme', 'dark', ['light', 'dark']));
  const t = (text) => language === 'en' ? (english[text] ?? text) : text;

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#ffffff' : '#10161e';
    try {
      localStorage.setItem('portfolio-language', language);
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The controls still work when browser storage is unavailable.
    }
  }, [language, theme]);
  const [filter, setFilter] = useState(filters[0]);

  const visible = filter === filters[0] ? projects : projects.filter((project) => project.category === filter);


  return (
    <>
      <a className="skip" href="#main">{t("Đến nội dung chính")}</a>
      <header className="shell top">
        <a className="brand" href="#main"><span aria-hidden="true">◈</span> tue1501</a>
        <nav aria-label={t("Điều hướng chính")}>
          <a href="#about">
            <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 8a8 8 0 0 1 16 0" /></svg>
            <span>{t("Giới thiệu")}</span>
          </a>
          <a href="#projects">
            <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h7l2 2h9v11H3V7Z" /></svg>
            <span>{t("Dự án")}</span>
          </a>
          <a href="#skills">
            <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-14-2 16" /></svg>
            <span>{t("Kỹ năng")}</span>
          </a>
          <a href="#contact">
            <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3V5Zm0 1 9 7 9-7" /></svg>
            <span>{t("Kết nối")}</span>
          </a>
        </nav>
        <div className="preferences">
          <div className="preference-switch" role="group" aria-label={t('Giao diện')}>
            <button type="button" aria-label={t('Sáng')} title={t('Sáng')} aria-pressed={theme === 'light'} onClick={() => setTheme('light')}>
              <span aria-hidden="true">☀</span>
            </button>
            <button type="button" aria-label={t('Tối')} title={t('Tối')} aria-pressed={theme === 'dark'} onClick={() => setTheme('dark')}>
              <span aria-hidden="true">☾</span>
            </button>
          </div>
          <div className="preference-switch" role="group" aria-label={t('Ngôn ngữ')}>
            <button type="button" lang="vi" aria-label="Tiếng Việt" title="Tiếng Việt" aria-pressed={language === 'vi'} onClick={() => setLanguage('vi')}>VI</button>
            <button type="button" lang="en" aria-label="English" title="English" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
          </div>
        </div>
      </header>
      <main id="main" className="shell">
        <section className="hero" aria-labelledby="intro">
          <div className="hero-copy">
            <p className="label">WEB DEVELOPMENT / BACKEND API</p>
            <h1 id="intro">Nguyễn Vũ<br />Minh Tuệ<span>.</span></h1>
            <p className="lead">{t("Mình phát triển API và giao diện quản trị cho các ứng dụng mạng xã hội, thương mại điện tử và dự án nhóm.")}</p>
            <div className="hero-actions">
              <a className="button" href="#projects">{t("Khám phá dự án")}</a>
              <a className="outline-button" href={github}>{t("Hồ sơ GitHub")}</a>
            </div>
          </div>
          <figure className="portrait">
            <img src={avatar} alt="Nguyễn Vũ Minh Tuệ" width="930" height="942" />
            <figcaption><a href={github}>@tue1501</a></figcaption>
          </figure>
        </section>
        <section className="about section" id="about" aria-labelledby="about-title">
          <div>
            <p className="label">{t("VỀ MÌNH")}</p>
            <h2 id="about-title">{t("Từ thao tác người dùng đến dữ liệu phía sau")}</h2>
          </div>
          <div className="about-copy">
            <p>{t("Mình tập trung vào backend web. Những bài toán mình đã làm có thể bắt đầu từ một thao tác rất quen thuộc như lưu bài, thêm sản phẩm vào giỏ hay đặt lịch khám. Phần mình đảm nhận là xây dựng các API và luồng xử lý để ứng dụng thực hiện được những thao tác đó.")}</p>
            <p>{t("Mỗi dự án giúp mình tiếp cận một loại dữ liệu khác nhau. Threads Towns có bài viết và thông báo, PetLand có đơn hàng và doanh thu, còn Hospital có hồ sơ khám và kết quả xét nghiệm.")}</p>
            <p>{t("Trong dự án nhóm Charity Ledger, mình còn phát triển dashboard quản trị và làm việc với các luồng duyệt chiến dịch, KYC và kiểm tra giao dịch on-chain.")}</p>
          </div>
        </section>
        <section className="work section" id="projects" aria-labelledby="work-title">
          <div className="section-head">
            <h2 id="work-title">{t("Dự án nổi bật")}</h2>
            <div className="filters" role="group" aria-label={t("Lọc dự án")}>
              {filters.map((item) => (
                <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>{t(item)}</button>
              ))}
            </div>
          </div>
          <p className="sr-only" role="status">{visible.length} / {projects.length} {t('dự án')}</p>
          <div className="project-list">{visible.map((project) => <ProjectCard key={project.name} project={project} t={t} language={language} />)}</div>
        </section>

        <section className="section skills" id="skills" aria-labelledby="skills-title">
          <h2 id="skills-title">{t("Công nghệ mình sử dụng")}</h2>
          <div className="skills-grid">
            {areas.map(([title, description, tools]) => (
              <article key={title} className="skill">
                <h3>{t(title)}</h3>
                <p className="muted">{t(description)}</p>
                <Tags t={t} items={tools} />
              </article>
            ))}
          </div>
        </section>
        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">{t("Kết nối với mình")}</h2>
          <ul className="social-links">
            {socialLinks.map(({ name, href }) => (
              <li key={name}>
                <a href={href} aria-label={name} title={name}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d={socialIcons[name]} /></svg>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="shell footer"><span>Nguyễn Vũ Minh Tuệ</span><a href="#main">{t("Về đầu trang")}</a></footer>

    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);