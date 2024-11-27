import React, { useState } from "react";
import { addRole, updateRole } from "../../api/mockApi";

function RoleForm({ role = {}, onSave }) {
  const [name, setName] = useState(role.name || "");
  const [permissions, setPermissions] = useState(role.permissions || []);

  const handleSave = () => {
    const newRole = { ...role, name, permissions };
    const saveAction = role.id ? updateRole(role.id, newRole) : addRole(newRole);
    saveAction.then(onSave);
  };

  return (
    <div>
      <h2>{role.id ? "Edit Role" : "Add Role"}</h2>
      <form>
        <div>
          <label>Role Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Permissions:</label>
          <input
            value={permissions.join(", ")}
            onChange={(e) => setPermissions(e.target.value.split(",").map((p) => p.trim()))}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
}

export default RoleForm;
