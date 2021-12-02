import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';

const Repository: React.FC = () => {
    return (
        <>
            <h3>Página Repository</h3>
            <Link to={`/`}>Dasboard</Link>
            <Card />
            <Card />
            <Card />
            <Card />
        </>
    );
}

export default Repository;