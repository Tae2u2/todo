import {useCallback, useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {todoListState} from '../atom/todoAtom';
import TodoApi from '../api/TodoApi';

export default function useGetTodos(
  {enabled}: {enabled: boolean} = {enabled: true},
) {
  const [{loading, data, error}, set] = useRecoilState(todoListState);

  const fetchData = useCallback(async () => {
    set({loading: true, data: null, error: null});
    try {
      const posts = await TodoApi.get();
      set({loading: false, data: posts, error: null});
    } catch (e:any) {
      set({loading: false, data: null, error: e});
    }
  }, [set]);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    fetchData();
  }, [enabled, fetchData]);

  return {
    loading,
    data,
    error,
    getTodos: fetchData,
  };
}