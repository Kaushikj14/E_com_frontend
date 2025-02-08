// import { Button, Grid2, Typography,Link } from "@mui/material";
// import React from "react";

// const Footer = () => {
//   return (
//     <div>
//       <Grid2
//         className="bg-black text-white text-center mt-10"
//         container
//         sx={{ bgcolor: "black", color: "white", py: 3 }}
//       >
//         <Grid2 item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Company
//           </Typography>

//           <div>
//             <Button className="pb-5" variant="h4" gutterBottom>
//               About
//             </Button>
//           </div>

//           <div>
//             <Button className="pb-5" variant="h4" gutterBottom>
//               Contact Us
//             </Button>
//           </div>

//           <div>
//             <Button className="pb-5" variant="h4" gutterBottom>
//               Blog
//             </Button>
//           </div>

//           <div>
//             <Button className="pb-5" variant="h4" gutterBottom>
//               Press
//             </Button>
//           </div>
//         </Grid2>

//         <Grid2 item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Solutions
//           </Typography>

//           <div>
//             <Button className="pb-5" variant="h4" gutterBottom>
//               Marketing
//             </Button>
//           </div>

//           <div>
//             <Button className="pb-5" variant="h4" gutterBottom>
//               Analytics
//             </Button>
//           </div>

//           <div>
//             <Button className="pb-5" variant="h4" gutterBottom>
//               Commerce
//             </Button>
//           </div>

//           <div>
//             <Button className="pb-5" variant="h4" gutterBottom>
//               Inights
//             </Button>
//           </div>

//           <div>
//             <Button className="pb-5" variant="h4" gutterBottom>
//               Support
//             </Button>
//           </div>
//         </Grid2>

//         <Grid2 item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Documentation
//           </Typography>

//           <div>
//             <Button className="pb-5" variant="h4" gutterBottom>
//               Guides
//             </Button>
//           </div>

//           <div>
//             <Button className="pb-5" variant="h4" gutterBottom>
//               API status
//             </Button>
//           </div>
//         </Grid2>

//         <Grid2 item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Legal
//           </Typography>

//           <div>
//             <Button className="pb-5" variant="h4" gutterBottom>
//               Claim
//             </Button>
//           </div>

//           <div>
//             <Button className="pb-5" variant="h4" gutterBottom>
//               Privacy
//             </Button>
//           </div>

//           <div>
//             <Button className="pb-5" variant="h4" gutterBottom>
//               Terms
//             </Button>
//           </div>
//         </Grid2>

//         <Grid2 className="pt-20" item xs={12}>
//           <Typography variant="body2" component="p" align="center">
//             &copy; 2023 My Company. All rights reserved.
//           </Typography>
//           <Typography variant="body2" component="p" align="center">
//             Made with love by Me.
//           </Typography>
//           <Typography variant="body2" component="p" align="center">
//             Icons made by{" "}
//             <Link
//               href="https://www.freepik.com"
//               color="inherit"
//               underline="always"
//             >
//               Freepik
//             </Link>{" "}
//             from{" "}
//             <Link
//               href="https://www.flaticon.com/"
//               color="inherit"
//               underline="always"
//             >
//               www.flaticon.com
//             </Link>
//           </Typography>
//         </Grid2>
//       </Grid2>
//     </div>
//   );
// };

// export default Footer;
import { Grid, Typography, Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          bgcolor: "black",
          color: "white",
          py: 5,
          textAlign: "center",
        }}
      >
        {/* Company */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Company
          </Typography>
          {["About", "Blog", "Press", "Jobs", "Partners"].map((item) => (
            <Typography key={item} sx={{ my: 1 }} variant="body2">
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Solutions */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Solutions
          </Typography>
          {["Marketing", "Analytics", "Commerce", "Insights", "Supports"].map(
            (item) => (
              <Typography key={item} sx={{ my: 1 }} variant="body2">
                {item}
              </Typography>
            )
          )}
        </Grid>

        {/* Documentation */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Documentation
          </Typography>
          {["Guides", "API Status"].map((item) => (
            <Typography key={item} sx={{ my: 1 }} variant="body2">
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Legal */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Legal
          </Typography>
          {["Claim", "Privacy", "Terms"].map((item) => (
            <Typography key={item} sx={{ my: 1 }} variant="body2">
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Footer Bottom */}
        <Grid item xs={12} sx={{ mt: 5 }}>
          <Typography variant="body2">&copy; 2025 My Company. All rights reserved.</Typography>
          <Typography variant="body2">Made with love by Me.</Typography>
          <Typography variant="body2">
            Icons made by{" "}
            <Link href="https://www.freepik.com" color="inherit" underline="always">
              Freepik
            </Link>{" "}
            from{" "}
            <Link href="https://www.flaticon.com/" color="inherit" underline="always">
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
