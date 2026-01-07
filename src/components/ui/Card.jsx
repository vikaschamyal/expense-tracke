function Card({ title, children, className = '', headerRight }) {
  return (
    <section
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 ${className}`}
    >
      {(title || headerRight) && (
        <header className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-100 dark:border-gray-700">
          {title && (
            <h2 className="text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-200">
              {title}
            </h2>
          )}
          {headerRight && <div className="ml-4">{headerRight}</div>}
        </header>
      )}
      <div className="px-5 pb-5 pt-3">{children}</div>
    </section>
  );
}

export default Card;


