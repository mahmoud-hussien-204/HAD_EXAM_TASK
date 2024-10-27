import {useRouter, useSearchParams} from "next/navigation";

import {useCallback} from "react";

interface ISearchParams {
  value: string;
  key: string;
}

export default function useUrlSearchParams() {
  const searchParams = useSearchParams();

  const router = useRouter();

  const setSearchParams = useCallback(
    ({
      searchParams: _searchParams,
      path,
    }: {
      searchParams: Array<ISearchParams> | ISearchParams;
      path?: string;
    }) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));

      // set query
      if (Array.isArray(_searchParams)) {
        _searchParams.forEach((p) => {
          params.set(p.key, p.value);
        });
      } else {
        params.set(_searchParams.key, _searchParams.value);
      }

      if (path) {
        router.push(path + "?" + params);
      } else {
        router.push("?" + params);
      }

      return params.toString();
    },
    [searchParams, router]
  );

  return {searchParams, setSearchParams};
}
