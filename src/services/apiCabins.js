import supabase, { superbaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) throw new Error('Cabins could not be loaded');
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(superbaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`;

  const imagePath = hasImagePath
    ? newCabin.image
    : `${superbaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from('cabins');

  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }

  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq('id', id);
  }

  const { data, error } = await query.select().single();

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
