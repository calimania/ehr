import { Paper,  Title, Text, Button, Group, Stack } from '@mantine/core';
import { useMedplum } from '@medplum/react';
import { Link } from 'react-router-dom';
import { useEffect , useState } from 'react';
import Logo from './components/Logo';
import { IconUserPlus } from '@tabler/icons-react';
import { getConfig } from './config';

const config = getConfig();

export const LandingPage = () => {
  const [profile, setProfile ] = useState({ id : null, resourceType: '' });

  const medplum = useMedplum();
  useEffect(() => {
    const _profile = medplum.getProfile();
    console.log({_profile})
    setProfile(_profile as any);
  }, []);

  return (
    <Paper  pt={100}>
      <Stack align="center" data-testid="search-control">
        <Logo size={60} title={'landing page logo'} />
        <Title order={1} ta="center" mt="md">
          {config.appName}
        </Title>
        <Text ta="center" mt="sm" mb="xl">
          Modern solution for electronic health records
          <br />
          Access patients, eforms, and workflows for better patient outcomes
        </Text>
          {!profile?.id && (
            <Group>
              <Button component={Link} to="/signin" size="lg">
                Sign In
              </Button>
              <Button component={Link} to="/register" variant="outline" size="lg">
                Register
              </Button>
            </Group>
          )}
          {profile?.id && (
            <Group>
              <Button component={Link} to="/Patient/new"  size="lg" leftSection={<IconUserPlus size={18}/>}>
                Add Patient
              </Button>
              <Button component={Link} to={`/${profile?.resourceType}/${profile?.id}`} variant="outline" size="lg">
                Profile
              </Button>
            </Group>
          )}
      </Stack>
    </Paper>
  );
}
