import React from 'react';

import FileItem from './FileItem';

export default {
  component: FileItem,
  title: 'Features/JobForm/FileItem',
}

export const SimpleFileItem = () => <FileItem key={1} fileName='slika.png' />