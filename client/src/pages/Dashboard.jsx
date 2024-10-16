import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } from '../redux/user/userManagmentSlice';

function Dashboard() {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.userManagement);
    
    useEffect(() => {
        const fetchUsers = async () => {
            dispatch(fetchUsersStart());
            try {
                const res = await fetch('/api/admin/user', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await res.json();
                dispatch(fetchUsersSuccess(data));
            } catch (err) {
                dispatch(fetchUsersFailure(err.message));
            }
        };
        fetchUsers();
    }, [dispatch]);

   return(
    <>
      <div class="bg-gray-100 p-4">
    <div class="max-w-8xl mx-auto bg-white rounded-lg overflow-hidden">
        <h1 class="text-2xl font-bold text-center py-4 bg-slate-300 text-slate-800">Users</h1>
        <div class="p-4 overflow-x-auto">
            {loading ? (
                <p class="text-center text-gray-500">Loading...</p>
            ) : error ? (
                <p class="text-center text-red-500">{error}</p>
            ) : (
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Picture</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td class="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td class="px-6 py-4 whitespace-nowrap">{user.username}</td>
                                <td class="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <img src={user.profilepic} alt={user.username} class="h-10 w-10 rounded-full object-cover" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    </div>
</div>
    </>
   )
}
export default Dashboard;