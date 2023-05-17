import { createContext, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [currentPageIndex, setCurrentPageIndex] = useState(0);
	const [currentPage, setCurrentPage] = useState('home');

	return (
		<DataContext.Provider
			value={{
				currentPageIndex,
				setCurrentPageIndex,
				currentPage,
				setCurrentPage
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
