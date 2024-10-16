
function EditUser() {    

    return (
      
       <>
        <h1 class="text-2xl font-bold text-center py-4 bg-blue-500 text-white">Edit Details</h1>
        <form class="p-4">
            <div class="mb-4">
                <label class="block text-gray-700">Username</label>
                <input
                    type="text"
                    name="username"
                    class="bg-gray-200 px-3 py-2 rounded-md w-full"
                    required
                />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    class="bg-gray-200 px-3 py-2 rounded-md w-full"
                    required
                />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">Profile Picture URL</label>
                <input
                    type="text"
                    name="profilepic"
                    class="bg-gray-200 px-3 py-2 rounded-md w-full"
                />
            </div>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                Update User
            </button>
        </form>
       </>
  
    );
}

export default EditUser;