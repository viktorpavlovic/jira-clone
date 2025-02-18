"use client";

import { useParams } from "next/navigation";

export const useWorkspaceId = () => {
  const params = useParams();

  if (!params?.workspaceId) {
    return null;
  }

  return params.workspaceId as string;
};
