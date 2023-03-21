
interface PageContainerProps {
  children: JSX.Element;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <section className="page-section">
    {children}
  </section>
}

export default PageContainer;