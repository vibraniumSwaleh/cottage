import supabase, { superbaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) throw new Error('Cabins could not be loaded');
  return data;
}

export async function createCabin(newCabin) {
  // https://alcvrrgdemcutlhtlvkn.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg
  const imageName = `${Math.random()}-${newCabin.image.name}`;
  console.log(imageName);
  const imagePath = `${superbaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) throw new Error('Cabin could not be created');

  const { error: imageUploadError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  if (imageUploadError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.log(imageUploadError);
    throw new Error(
      'Cabin image was not uploaded and the cabin was not created',
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from('cabins').delete().eq('id', id);
  if (error) throw new Error('Cabin could not be deleted');

  const { error: imageDeleteError } = await supabase.storage
    .from('cabin-images')
    .remove(['folder/avatar1.png']);
}
