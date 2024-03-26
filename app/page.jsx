import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1 className="text-3xl text-slate-700">Hie</h1>
    <Link href='properties'>Show me!</Link>
    </>
  );
}
