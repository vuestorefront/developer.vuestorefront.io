export function isTag(vnode: any, tag: string) {
  return vnode.type.name === tag || vnode.type.tag === tag;
}
