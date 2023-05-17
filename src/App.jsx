import { backgrounds } from './assets';
import { useContext, useEffect } from 'react';
import DataContext from './context/DataContext';
import { useMediaQuery } from 'react-responsive';

export default function App() {
	const { currentPage } = useContext(DataContext);
	const isDesktop = useMediaQuery({ query: '(min-width: 65em)' });
	const isTablet = useMediaQuery({ query: '(min-width: 40em)' });
	const device = isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile';

	useEffect(() => {
		document.body.style.backgroundImage = `url(${backgrounds[currentPage][device]})`;
	}, [currentPage, device]);

	return <h1>Hello, World</h1>;
}
