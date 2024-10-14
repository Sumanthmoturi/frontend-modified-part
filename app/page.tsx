export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Welcome to the Todo App
        </h1>

        <div className="space-y-4">
          <a
            href="/register"
            className="block w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
          >
            Register
          </a>
          <a
            href="/login"
            className="block w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
          >
            Login
          </a>
          <a
            href="/create-todo"
            className="block w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600"
          >
            Create Todo
          </a>
          <a
            href="/list-todos"
            className="block w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600"
          >
            List Todos
          </a>
        </div>
      </div>
    </div>
  );
}
