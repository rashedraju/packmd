import React from 'react';
import { AiOutlineFileText, AiFillFileZip } from 'react-icons/ai';
import { FaTags } from 'react-icons/fa';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import Readme from '../../../../components/Readme/Readme';
import styles from './PackInfo.module.css';
import Dependencies from '../../../../components/Dependencies/Dependencies';
import Versions from '../../../../components/Versions/Versions';
import MetaInfo from '../../../../components/MetaInfo/MetaInfo';

const PackInfo = ({ packInfo }) => (
    <>
        <h2>{packInfo.name}</h2>
        <ul className={styles.VersionInfo}>
            <li>{packInfo.curVersion?.version}</li>
            <li>{packInfo.lastRealeseDate}</li>
        </ul>

        <Tab.Container defaultActiveKey="readme">
            <Nav className={styles.Tab}>
                <Nav.Item className={styles.Readme}>
                    <Nav.Link eventKey="readme">
                        <AiOutlineFileText />
                        &nbsp;Readme
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className={styles.Dependencies}>
                    <Nav.Link eventKey="dependencies">
                        <AiFillFileZip />
                        &nbsp;{packInfo.dependencies.length}&nbsp;Dependencies
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className={styles.Versions}>
                    <Nav.Link eventKey="versions">
                        <FaTags />
                        &nbsp;{packInfo.versions.length}&nbsp;Versions
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <Row>
                <Col lg={{ span: 4, order: 'last' }}>
                    <MetaInfo
                        command={packInfo.name}
                        version={packInfo.curVersion?.version}
                        license={packInfo.license}
                        unpackedSize={packInfo.unpackedSize}
                        fileCount={packInfo.fileCount}
                        homepage={packInfo.homepage}
                        repository={packInfo.repository}
                        lastModified={packInfo.lastModified}
                    />
                </Col>
                <Col lg={{ span: 8, order: 'fast' }}>
                    <Tab.Content>
                        <Tab.Pane eventKey="readme">
                            <Readme
                                markdown={
                                    packInfo.readme !== '' ? packInfo.readme : packInfo.description
                                }
                            />
                        </Tab.Pane>
                        <Tab.Pane eventKey="dependencies">
                            <Dependencies
                                dependencies={packInfo.dependencies}
                                devDependencies={packInfo.devDependencies}
                            />
                        </Tab.Pane>
                        <Tab.Pane eventKey="versions">
                            <Versions
                                versions={packInfo.versions}
                                curVersion={packInfo.curVersion}
                            />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </>
);

export default PackInfo;
