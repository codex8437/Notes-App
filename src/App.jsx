import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);

    setTask(copyTask);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Left Section */}
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="lg:w-1/2 p-8 bg-white shadow-md"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Add Notes
        </h1>

        {/* Title Input */}
        <input
          type="text"
          placeholder="Enter Note Title"
          className="w-full border border-gray-300 rounded-md p-3 mb-4 outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* Details Input */}
        <textarea
          placeholder="Write your note here..."
          className="w-full h-36 border border-gray-300 rounded-md p-3 mb-4 outline-none resize-none focus:border-blue-500"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>

        <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 active:scale-95 transition">
          Add Note
        </button>
      </form>

      {/* Right Section */}
      <div className="lg:w-1/2 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Recent Notes
        </h1>

        <div className="flex flex-wrap gap-4">
          {task.length > 0 ? (
            task.map((elem, idx) => {
              return (
                <div
                  key={idx}
                  className="w-64 min-h-56 bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {elem.title}
                    </h3>

                    <p className="text-sm text-gray-600 mt-3 break-words">
                      {elem.details}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      deleteNote(idx);
                    }}
                    className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 active:scale-95 transition"
                  >
                    Delete
                  </button>
                </div>
              );
            })
          ) : (
            <div className="text-gray-500 text-lg">
              No notes available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;