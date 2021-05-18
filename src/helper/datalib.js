export const getVersions = (obj = {}) => Object.keys(obj).filter((el) => !el.includes('-'));

export const getDependecies = (obj = {}) => Object.keys(obj);

export const findReleaseDate = (lastDate) => {
    const hour = Math.ceil(
        Math.abs(new Date().getTime() - new Date(lastDate).getTime()) / (1000 * 60 * 60)
    );
    if (hour < 24) {
        return `Published ${hour} hours ago`;
    }

    const days = Math.ceil(hour / 24);
    if (days < 30) {
        return `Published ${days} days ago`;
    }

    const months = Math.ceil(days / 30);
    if (months < 12) {
        return `Published ${months} months ago`;
    }

    const years = Math.ceil(months / 12);
    if (years > 0) {
        return `Published ${years} years ago`;
    }
    return '';
};

export const findLastReleaseDate = (dateObj = null) => {
    if (dateObj) {
        let date;
        Object.keys(dateObj).forEach((key) => {
            if (!key.includes('-')) {
                date = dateObj[key];
            }
        });
        return findReleaseDate(date);
    }
    return '';
};

export const findSize = (byte = 0) => {
    const size = parseInt(byte, 10) / 100;
    if (byte >= 1000) {
        return `${Math.floor(size)} KB`;
    }
    return `${size.toFixed(2)} KB`;
};

export const parseRepoUrl = (url = '') => url.replace(/git\+|\.git/g, '');
