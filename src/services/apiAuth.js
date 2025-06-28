import supabase from './supabase';

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  console.log('getCurrentUser session:', session.session);
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  console.log('getCurrentUser', data?.user);

  if (error) throw new Error(error.message);
  return data?.user;
}
