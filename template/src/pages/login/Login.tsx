import {
  Avatar,
  Button,
  Container,
  Icon,
  Snackbar,
  TextField,
  Typography,
  CircularProgress
} from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLoginStyles } from "./styles";
import FirebaseAuth from "../../services/FirebaseAuth";

const Login: React.FC = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState<Error | null>();
  const [isLoading, setIsLoading] = useState(false);
  const classes = useLoginStyles();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        setError(null);
        await FirebaseAuth.signInWithEmailAndPassword(
          user.email,
          user.password
        );
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    },
    [user.email, user.password]
  );

  const handleChangeText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    },
    [user]
  );

  useEffect(() => {
    FirebaseAuth.onAuthStateChanged(userState => {
      if (userState !== null) {
        history.push("/");
      }
    });
  }, [history]);

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {isLoading ? (
            <CircularProgress color="inherit" />
          ) : (
            <Icon fontSize="large">account_circle</Icon>
          )}
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} method="post">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={user.email}
            onChange={handleChangeText}
            disabled={isLoading}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={user.password}
            onChange={handleChangeText}
            disabled={isLoading}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isLoading}
            className={classes.submit}
            endIcon={<Icon>send</Icon>}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setError(null)}
        message={error?.message}
      />
    </Container>
  );
};

export default Login;
