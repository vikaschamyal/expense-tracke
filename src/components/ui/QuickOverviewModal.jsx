const QuickOverviewModal = ({ onClose }) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
  
        {/* BACKDROP */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
  
        {/* MODAL */}
        <div className="relative z-10 w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl px-12 py-10">
  
          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Welcome to Ledgerly
            </h1>
  
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Ledgerly gives you a clear, structured view of your finances —
              helping you make better decisions with confidence.
            </p>
          </div>
  
          {/* CONTENT */}
          <div className="space-y-5 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Monitor income and expenses in real time with a system designed
              for clarity, accuracy, and speed.
            </p>
  
            <p>
              Analyze spending patterns using detailed breakdowns and monthly
              trends to understand exactly where your money goes.
            </p>
  
            <p>
              Track savings and investments alongside daily expenses to maintain
              a complete financial overview — all in one place.
            </p>
  
            <p>
              Use built-in assistance whenever you need guidance or insights.
            </p>
          </div>
  
          {/* ACTIONS */}
          <div className="mt-10 flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            >
              Skip overview
            </button>
  
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Continue to dashboard
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default QuickOverviewModal;
  