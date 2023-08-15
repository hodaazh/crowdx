// export default function Post : NextPage<Props> ({
//   postData
//  }: {
//     postData: {
//     title: string
//     date: string
//     contentHtml: string
//   }
//  }) {
//    return (...
// ==

// export default function Post : NextPage<Props> ({ postData }) {
//   ...
// }

// !! NextPage is the type of the return, and Props is the type of the argument to the function.
// ----------------------------------------------------------------------

// 1-React.FC (Function Component)

// const MyComponent: React.FC<Props> = (props) => {
//   return <div>{props.message}</div>;
// };

// 2-React.Element
// const MyComponent: React.Element = (props) => {
//   return <div>{props.message}</div>;
// };

// 3-NextPage
// const MyPage: NextPage<Props> = (props) => {
//   return <div>{props.message}</div>;
// };

// ----------------------------------------------------------------------

// if you wand declare array of object you can:

// 1-Use an existing type or interface.

// interface IPerson {
//   name: string;
//   age: number;
// }

// const people: IPerson[] = [
//   {
//       age: 27,
//       name: 'Tim'
//   },
//   {
//       age: 28,
//       name: 'Bob'
//   }
// ]

// 2-Use an inline type.

// const people: { name: string; age: number; }[] = [
//   {
//       age: 27,
//       name: 'Tim'
//   },
//   {
//       age: 28,
//       name: 'Bob'
//   }
// ]

// 3-Use the built-in Array type.

// const people: Array<{ name: string; age: number; }> = [
//   {
//       age: 27,
//       name: 'Tim'
//   },
//   {
//       age: 28,
//       name: 'Bob'
//   }
// ]
// 4-Use the typeof operator.

// const item1 = {
//   age: 27,
//   name: 'Tim'
// };

// const item2 = {
//   age: 28,
//   name: 'Bob'
// };

// const people: Array<typeof item2> = [
//  item1,
//  item2
// ];
