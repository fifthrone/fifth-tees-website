export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex items-center justify-center max-w-6xl mx-auto">
			{children}
		</div>
	);
}
