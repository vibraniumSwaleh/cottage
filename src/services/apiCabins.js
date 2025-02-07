import supabase from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) throw new Error('Cabins could not be loaded');
  return data;
}

export async function createCabin(newCabin)
{
  // https://alcvrrgdemcutlhtlvkn.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg
  

  const { data, error } = await supabase
    .from('cabins')
    .insert([newCabin])
    .select();

  if (error) throw new Error('Cabin could not be created');
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from('cabins').delete().eq('id', id);
  if (error) throw new Error('Cabin could not be deleted');
}
