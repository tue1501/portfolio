import React from 'react';
import { details } from './project-details.js';
import { bookmarkCopy } from './bookmark-study.js';

export function ProjectStudy({ project, language, t }) {
  const bookmark = bookmarkCopy[language];
  const isThreads = project.theme === 'threads';

  return (
    <section className="project-study" id={isThreads ? 'threads-case-study' : undefined} aria-labelledby={`study-${project.theme}`}>
      <h4 id={`study-${project.theme}`}>{t("Phần mình thực hiện")}</h4>
      {isThreads && <p className="muted">{bookmark.intro}</p>}
      <ul className="workflow">
        {details[project.theme].features.map(([title, description]) => (
          <li key={title}><strong>{t(title)}</strong><p className="muted">{t(description)}</p></li>
        ))}
      </ul>
      {isThreads && <p className="muted">{bookmark.decision}</p>}
    </section>
  );
}
