<script>
</script>

<template>
  <div class="container-fluid h-100">
			<div class="row h-100">
				<div class="col-12 col-md-8">
					<img src="/images/login.gif" class="img-signin" />
				</div>
				<div class="col-12 col-md-4 bg-light shadow pt-5 px-3 px-md-5 h-100">
					<div class="row">
						<div class="col-12 text-center">
							<img class="mb-4" src="/images/unlock.png" alt="" width="100" />
							<h1 class="h3 mb-3 fw-normal">Please sign in</h1>
						</div>
						<div class="col-12">
							<form>
								<div class="form-floating">
									<input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
									<label for="floatingInput">Email address</label>
								</div>
								<div class="form-floating mt-3">
									<input type="password" class="form-control" id="floatingPassword" placeholder="Password">
									<label for="floatingPassword">Password</label>
								</div>

								<div class="checkbox mb-3">
									<label>
										<input type="checkbox" value="remember-me"> Remember me
									</label>
								</div>
								<button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
							</form>
						</div>

						<div class="col-12 mt-5">
							<router-link to="/rogot-password" class="text-link">
								Forgot Password
							</router-link>
						</div>
						<div class="col-12 mt-2">
							<router-link to="/register" class="text-link">
								Register
							</router-link>
						</div>

						<div class="col-12 text-center">
							<p class="mt-5 mb-3 text-muted">&copy; 2022</p>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<style scoped>
	@import "../../assets/css/signin.css";
	.bd-placeholder-img {
		font-size: 1.125rem;
		text-anchor: middle;
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
	}

	@media (min-width: 768px) {
		.bd-placeholder-img-lg {
			font-size: 3.5rem;
		}
	}

	.b-example-divider {
		height: 3rem;
		background-color: rgba(0, 0, 0, 0.1);
		border: solid rgba(0, 0, 0, 0.15);
		border-width: 1px 0;
		box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
			inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
	}

	.b-example-vr {
		flex-shrink: 0;
		width: 1.5rem;
		height: 100vh;
	}

	.bi {
		vertical-align: -0.125em;
		fill: currentColor;
	}

	.nav-scroller {
		position: relative;
		z-index: 2;
		height: 2.75rem;
		overflow-y: hidden;
	}

	.nav-scroller .nav {
		display: flex;
		flex-wrap: nowrap;
		padding-bottom: 1rem;
		margin-top: -1px;
		overflow-x: auto;
		text-align: center;
		white-space: nowrap;
		-webkit-overflow-scrolling: touch;
	}

	.img-signin {
		position: absolute;
		bottom: 2rem;
		width: 30%;
	}
</style>