"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { addBookmark, removeBookmark } from "@/lib/actions/companion.actions";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;

  userId?: string | null;
  isBookmarked?: boolean;
  revalidatePath?: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
  userId,
  isBookmarked = false,
  revalidatePath = "/",
}: CompanionCardProps) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);
  const [isPending, startTransition] = useTransition();

  const onToggleBookmark = () => {
    if (!userId) return;

    startTransition(async () => {
      const next = !bookmarked;
      setBookmarked(next);

      try {
        if (next) await addBookmark(id, revalidatePath);
        else await removeBookmark(id, revalidatePath);
      } catch (e) {
        setBookmarked(!next);
        console.error(e);
      }
    });
  };

  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>

        <button
          type="button"
          className="companion-bookmark"
          onClick={onToggleBookmark}
          disabled={!userId || isPending}
          aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
          title={!userId ? "Sign in to bookmark" : bookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          <Image
            src={bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"}
            alt="Bookmark Icon"
            width={12.5}
            height={15}
          />
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>

      <div className="flex items-center gap-2">
        <Image src="/icons/clock.svg" alt="Clock Icon" width={13.5} height={13.5} />
        <p className="texsm">{duration} minutes</p>
      </div>

      <Link href={`/companions/${id}`} className="w-full mt-auto">
        <button className="btn-primary w-full justify-center">
          Launch Lesson
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
