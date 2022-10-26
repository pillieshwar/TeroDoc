import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./SopPage.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function PdfViewer({ pdf }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [pdfUrl, setPdfUrl] = useState(params.get("pdfId"));
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/*<Grid
            alignItems={"center"}
            alignContent={"center"}
            item
            xs={12}
            md={12}
          >
            <button onClick={prevPage} disabled={pageNumber === 1}>
              Prev
            </button>
            <button onClick={nextPage} disabled={pageNumber === numPages}>
              Next
            </button>
          </Grid> */}
          <Grid item xs={12} md={6}>
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onContextMenu={(e) => e.preventDefault()}
              className="pdf-container"
            >
              <Page pageNumber={1} />
            </Document>
          </Grid>
          <Grid item xs={12} md={6}>
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onContextMenu={(e) => e.preventDefault()}
              className="pdf-container"
            >
              <Page pageNumber={2} />
            </Document>
          </Grid>
          {/* <Grid item xs={1} md={1}></Grid> */}
        </Grid>
      </Box>
    </div>
  );
}
