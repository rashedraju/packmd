import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import github from 'react-syntax-highlighter/dist/esm/styles/hljs/github';
import styles from './Readme.module.css';

const components = {
    code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <SyntaxHighlighter style={github} language={match[1]} PreTag="div" {...props}>
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        ) : (
            <code className={className} {...props} />
        );
    },
};

const Readme = ({ markdown }) => (
    <div className={styles.readme}>
        <ReactMarkdown remarkPlugins={[gfm]} components={components}>
            {markdown}
        </ReactMarkdown>
    </div>
);

export default Readme;
