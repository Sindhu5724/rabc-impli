import React, { useEffect, useState } from "react";
import { getRoles, deleteRole } from "../../api/mockApi";

function RoleList() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getRoles().then(setRoles);
  }, []);

  const handleDelete = (id) => {
    deleteRole(id).then((updatedRoles) => setRoles(updatedRoles));
  };

  return (
    <div>
      <h1>Role Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(role.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoleList;
