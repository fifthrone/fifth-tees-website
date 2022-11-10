export default function Loading() {
	// Or a custom loading skeleton component
	return (
		<div className="p-2 sm:p-8 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{[...Array(20)].map((e, i) => (
				<div className="h-80 bg-gray-100 dark:bg-neutral-800 rounded-2xl p-3" key={i}>
					<div className="h-64 w-full rounded-xl bg-gray-200 dark:bg-neutral-700"> </div>
				</div>
			))}
		</div>
	);
}
