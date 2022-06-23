export const useBreadCrumbs = () => {
  const { toTitleCase } = useTextCase();
  const route = useRoute();
  const router = useRouter();

  const breadCrumbs = computed(() => {
    const { fullPath } = route;

    const params = fullPath.startsWith('/')
      ? fullPath.slice(1).split('/')
      : fullPath.split('/');

    const crumbs = [];
    let path = '';

    params.forEach((param) => {
      path = `${path}/${param}`;
      const match = router.match(path);
      if (match.name !== null) {
        crumbs.push({
          title: toTitleCase(param.replace(/-/g, ' ')),
          ...match,
        });
      }
    });
    return crumbs;
  });

  return {
    breadCrumbs,
  };
};
