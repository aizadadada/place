import React from 'react';
import AddPlace from '../../functions/Admin/AddPlace';
import PlaceTable from '../../functions/Admin/PlaceTable';

const AdminPage = () => {
    return (
        <div>
            <AddPlace />
            <PlaceTable />
        </div>
    );
};

export default AdminPage;