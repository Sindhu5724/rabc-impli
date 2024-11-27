const mockUsers = [
    { id: 1, name: 'Admin', email: 'admin@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'John Doe', email: 'john@example.com', role: 'Editor', status: 'Inactive' },
  ];
  
  const mockRoles = [
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
  ];
  
  export const getUsers = () => Promise.resolve([...mockUsers]);
  export const addUser = (user) => Promise.resolve({ ...user, id: mockUsers.length + 1 });
  export const updateUser = (id, user) =>
    Promise.resolve(mockUsers.map((u) => (u.id === id ? { ...u, ...user } : u)));
  export const deleteUser = (id) => Promise.resolve(mockUsers.filter((u) => u.id !== id));
  
  export const getRoles = () => Promise.resolve([...mockRoles]);
  export const addRole = (role) => Promise.resolve({ ...role, id: mockRoles.length + 1 });
  export const updateRole = (id, role) =>
    Promise.resolve(mockRoles.map((r) => (r.id === id ? { ...r, ...role } : r)));
  export const deleteRole = (id) => Promise.resolve(mockRoles.filter((r) => r.id !== id));
  