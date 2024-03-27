import Link from 'next/link'
import "../assets/globals.css"
export default function Home() {
  return (
    <>
    <h1 className="text-3xl text-slate-700 font-workbench">Hie</h1>
    <Link href='properties'>Show me!</Link>
    </>
  );
}
