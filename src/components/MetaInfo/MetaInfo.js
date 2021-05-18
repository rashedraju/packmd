import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaRegCopy, FaLink, FaGitAlt } from 'react-icons/fa';
import styles from './MetaInfo.module.css';

const MetaInfo = (props) => {
    const {
        command,
        version,
        license,
        unpackedSize,
        fileCount,
        homepage,
        repository,
        lastModified,
    } = props;
    const [copy, setCopy] = useState(null);

    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(`npm i ${command}`)
            .then(() => {
                setCopy('Copied to clipboard');
                setTimeout(() => {
                    setCopy(null);
                }, 2000);
            })
            .catch(() => {
                setCopy('Oops, unable to copy');
                setTimeout(() => {
                    setCopy(false);
                }, 2000);
            });
    };

    return (
        <div className="p-2">
            <div className={`${styles.CopyMsg} ${copy && styles.Show}`}> {copy} </div>
            <div className="py-2">
                <h5 className="mb-2 text-secondary">Install</h5>
                <p className={styles.InstallCode}>
                    <MdKeyboardArrowRight />
                    <code title="Copy Command to Clipboard" onClick={copyToClipboard}>
                        {`npm i ${command}`}
                    </code>
                    <FaRegCopy />
                </p>
            </div>
            <div className="py-2 row">
                <div className="col d-flex flex-column">
                    <h5 className="mb-2 text-secondary">Version</h5>
                    <strong className="font-weight-bold"> {version} </strong>
                </div>
                <div className="col d-flex flex-column">
                    <h5 className="mb-2 text-secondary">License</h5>
                    <strong className="font-weight-bold"> {license} </strong>
                </div>
            </div>
            <hr />
            <div className="py-2 row">
                <div className="col d-flex flex-column">
                    <h5 className="mb-2 text-secondary">Unpacked Size</h5>
                    <strong className="font-weight-bold"> {unpackedSize} </strong>
                </div>
                <div className="col d-flex flex-column">
                    <h5 className="mb-2 text-secondary">Total Files</h5>
                    <strong className="font-weight-bold"> {fileCount} </strong>
                </div>
            </div>
            <hr />
            <div className="py-2">
                <h5 className="mb-2 text-secondary">Homepage</h5>
                <a href={`${homepage}`} className="font-weight-bold d-flex align-items-center">
                    {' '}
                    <span className="d-inline-block pr-2">
                        <FaLink />
                    </span>{' '}
                    <span>{homepage}</span>
                </a>
            </div>
            <hr />
            <div className="py-2">
                <h5 className="mb-2 text-secondary">Repository</h5>
                <a href={`${repository}`} className="font-weight-bold d-flex align-items-center">
                    <span className="d-inline-block pr-2">
                        <FaGitAlt />
                    </span>
                    <span>{repository}</span>
                </a>
            </div>
            <hr />
            <div className="py-2">
                <h5 className="mb-2 text-secondary">Last publish</h5>
                <strong className="font-weight-bold"> {lastModified} </strong>
            </div>
            <hr />
        </div>
    );
};

MetaInfo.propTypes = {
    command: PropTypes.string,
    version: PropTypes.string,
    license: PropTypes.string,
    unpackedSize: PropTypes.string,
    fileCount: PropTypes.string,
    homepage: PropTypes.string,
    repository: PropTypes.string,
    lastModified: PropTypes.string,
};

MetaInfo.defaultProps = {
    command: '',
    version: '',
    license: '',
    unpackedSize: '',
    fileCount: '',
    homepage: '',
    repository: '',
    lastModified: '',
};

export default MetaInfo;
