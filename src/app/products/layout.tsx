export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flexitems-centerjustify-center max-w-6xl mx-auto">
			{children}
		</div>
	);
}