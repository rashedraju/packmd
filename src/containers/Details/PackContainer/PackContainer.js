import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { SEARCHPACHURL } from '../../../constants/constants';
import Loader from '../../../components/Loader/Loader';
import Error from '../../../components/Error/Error';
import PackInfo from './PackInfo/PackInfo';
import {
    findLastReleaseDate,
    getVersions,
    getDependecies,
    findSize,
    parseRepoUrl,
    findReleaseDate,
} from '../../../helper/datalib';

const PackContainer = () => {
    const { name } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [packInfo, setPackInfo] = useState(null);

    useEffect(() => {
        setLoading(true);
        setPackInfo(null);

        axios
            .get(`${SEARCHPACHURL}${name}`)
            .then((response) => {
                const versions = getVersions(response.data.versions);
                const curVersion = versions.length ? response.data.versions[versions.pop()] : null;
                const dependencies = curVersion?.dependencies
                    ? getDependecies(curVersion.dependencies)
                    : [];
                const devDependencies = curVersion?.devDependencies
                    ? getDependecies(curVersion.devDependencies)
                    : [];

                const data = {
                    name: response.data.name,
                    homepage: response.data.homepage,
                    repository: parseRepoUrl(response.data.repository.url),
                    readme: response.data.readme,
                    description: response.data.description,
                    versions,
                    curVersion,
                    lastRealeseDate: findLastReleaseDate(response.data.time),
                    lastModified: findReleaseDate(response.data.time.modified ?? null),
                    dependencies,
                    devDependencies,
                    unpackedSize: findSize(curVersion?.dist.unpackedSize),
                    fileCount: curVersion?.dist.fileCount,
                    license: response.data.license,
                };
                setPackInfo(data);
                // console.log(response.data);
                setError(false);
                setLoading(false);
            })
            .catch((e) => {
                console.log('Something wrong!', e);
                setError(true);
                setLoading(false);
            });
    }, [name]);

    const detailsElements = () => {
        if (loading) return <Loader />;
        if (packInfo) return <PackInfo packInfo={packInfo} />;
        if (error) return <Error msg="Something went wrong." />;
        return null;
    };

    return detailsElements();
};

export default PackContainer;
