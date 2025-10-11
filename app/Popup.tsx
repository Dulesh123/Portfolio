export  default function Popup(){
    return <div>
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          {/* Popup Box */}
          <div className="bg-white rounded-xl shadow-xl p-8 text-center w-64">
            <h2 className="text-gray-900 text-lg font-semibold mb-4">
              Hello 👋
            </h2>
            <p className="text-gray-600 mb-4">
              This is your popup content.
            </p>
            <button
              className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition" onClick={}
            >
              Close
            </button>
          </div>
        </div>

    </div>

}