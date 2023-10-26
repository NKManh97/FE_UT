import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
	return (
		<main>
			<div className="text-center"> test</div>
			<ul>
				<li>
					<Link href={'/facebook'}>
						<span className="text-center underline text-red-500">Facebook</span>
					</Link>
				</li>
				<li style={{ margin: '20px 0' }}>
					<Link href={'/youtube'}> Youtube </Link>
				</li>
			</ul>
		</main>
	)
}
