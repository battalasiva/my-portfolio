import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import { fetchPortfolio } from "./redux/slices/portfolioSlice";
import { fetchProjects } from "./redux/slices/projectsSlice";
import { fetchContact } from "./redux/slices/contactSlice";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./styles/GlobalStyles";
import Loader from "./components/common/Loader";

const AppContent = () => {
  const dispatch = useDispatch();
  const { data: portfolio, loading: portfolioLoading } = useSelector((state) => state.portfolio);

  useEffect(() => {
    // Load portfolio first
    dispatch(fetchPortfolio());
  }, [dispatch]);

  useEffect(() => {
    // After portfolio loads, load projects and contact
    if (portfolio) {
      dispatch(fetchProjects({ status: 'active' }));
      dispatch(fetchContact());
    }
  }, [portfolio, dispatch]);

  if (portfolioLoading && !portfolio) {
    return (
      <>
        <GlobalStyle />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <Loader size="60px" minHeight="100vh" />
        </div>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
