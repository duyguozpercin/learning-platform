import { auth } from "@clerk/nextjs/server";
import { getAllCompanions, getBookmarkedCompanionIds } from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/CompanionCard";
import { getSubjectColor } from "@/lib/utils";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
    const filters = await searchParams;
    const subject = filters.subject ? filters.subject : '';
    const topic = filters.topic ? filters.topic : '';

    const { userId } = await auth();

    const companions = await getAllCompanions({ subject, topic });

    const bookmarkedIds = userId
        ? await getBookmarkedCompanionIds(userId)
        : [];

    const bookmarkedSet = new Set(bookmarkedIds);

    return (
        <main>
            <section className="flex justify-between gap-4 max-sm:flex-col">
                <h1>Companion Library</h1>
                <div className="flex gap-4">
                    <SearchInput />
                    <SubjectFilter />
                </div>
            </section>
            <section className="companions-grid">
                {companions.map((companion) => (
                    <CompanionCard
                        key={companion.id}
                        {...companion}
                        color={getSubjectColor(companion.subject)}
                        userId={userId}
                        isBookmarked={bookmarkedSet.has(companion.id)}
                        revalidatePath="/companions"
                    />
                ))}
            </section>
        </main>
    )
}

export default CompanionsLibrary