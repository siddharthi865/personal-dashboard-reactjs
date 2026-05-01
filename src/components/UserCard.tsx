const UserCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-2xl shadow transition-colors duration-300">
      <h2 className="text-xl font-semibold mb-2">John Doe</h2>
      <p className="text-gray-600 dark:text-gray-200">Frontend Developer</p>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
        Loves React, TypeScript, and building dashboards.
      </p>
    </div>
  );
};

export default UserCard;
