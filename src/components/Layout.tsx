import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showPlantInventory?: boolean;
}

export default function Layout({ children, showPlantInventory = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header showPlantInventory={showPlantInventory} />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
