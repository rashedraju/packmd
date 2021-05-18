import React from 'react';
import Error from '../Error/Error';

const Versions = ({ curVersion, versions }) => (
    <>
        <h3>Current Version</h3>
        <hr />
        <p>{curVersion?.version}</p>
        <h3>Version History</h3>
        <hr />
        <ul style={{ listStyle: 'none' }}>
            {versions ? (
                versions.slice(0, versions.length).map((el, i) => (
                    <li style={{ padding: '1rem' }} key={i.toString()}>
                        {el}
                    </li>
                ))
            ) : (
                <Error msg="Version history not found." />
            )}
        </ul>
    </>
);

export default Versions;
