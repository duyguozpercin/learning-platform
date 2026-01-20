import React from 'react';
import CompanionCard from '@/components/CompanionCard';
import CTA from '@/components/CTA';
import CompanionsList from '@/components/CompanionsList';
import { getAllCompanions, getRecentSessions, getBookmarkedCompanionIds } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import { auth } from '@clerk/nextjs/server';

const Page = async () => {
  const { userId } = await auth();

  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);

  const bookmarkedIds = userId
    ? await getBookmarkedCompanionIds(userId)
    : [];

  const bookmarkedSet = new Set(bookmarkedIds);

  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="popular-grid">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
            userId={userId}
            isBookmarked={bookmarkedSet.has(companion.id)}
            revalidatePath="/"
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
