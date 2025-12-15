"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Upload,
  FileSpreadsheet,
  X,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

type FileWithPreview = File & {
  preview: string;
  status: "idle" | "uploading" | "success" | "error";
  message?: string;
};

export function BulkUploadStudents() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    processFiles(selectedFiles);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const processFiles = (fileList: File[]) => {
    const newFiles = fileList.map((file) => ({
      ...file,
      preview: URL.createObjectURL(file),
      status: "idle" as const,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (fileName: string) => {
    setFiles((prev) => prev.filter((f) => f.name !== fileName));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    setIsUploading(true);

    // Simulate upload process
    try {
      // TODO: Replace with actual upload logic
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setFiles((prev) =>
        prev.map((file) => ({
          ...file,
          status: "success" as const,
          message: "Uploaded successfully",
        }))
      );
    } catch (error) {
      setFiles((prev) =>
        prev.map((file) => ({
          ...file,
          status: "error" as const,
          message: `Upload failed: ${
            error instanceof Error ? error.message : "Unknown error"
          }`,
        }))
      );
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Bulk Upload Students</h1>
          <p className="text-muted-foreground">
            Upload a CSV or Excel file with student data
          </p>
        </div>

        <Card
          className="border-2 border-dashed p-8 text-center"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          data-dragging={isDragging}
          style={{
            backgroundColor: isDragging ? "rgba(0, 0, 0, 0.02)" : "transparent",
            borderColor: isDragging
              ? "hsl(var(--primary))"
              : "hsl(var(--border))",
          }}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Upload className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="font-medium">
                {isDragging
                  ? "Drop the files here"
                  : "Drag and drop files here, or click to select"}
              </p>
              <p className="text-sm text-muted-foreground">
                CSV or Excel files (max. 10MB)
              </p>
            </div>
            <div className="mt-2">
              <Input
                type="file"
                id="file-upload"
                className="hidden"
                accept=".csv,.xlsx,.xls"
                multiple
                onChange={handleFileChange}
              />
              <Button
                asChild
                type="button"
                variant="outline"
                className="cursor-pointer"
              >
                <label htmlFor="file-upload">Select Files</label>
              </Button>
            </div>
          </div>
        </Card>

        {files.length > 0 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Selected Files ({files.length})</h3>
              <Button
                onClick={handleUpload}
                disabled={
                  isUploading || files.some((f) => f.status === "uploading")
                }
              >
                {isUploading ? "Uploading..." : "Upload All"}
              </Button>
            </div>

            <div className="space-y-2">
              {files.map((file) => (
                <div
                  key={file.name}
                  className="flex items-center justify-between p-3 border rounded-md hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <FileSpreadsheet className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{file.name}</p>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{(file.size / 1024).toFixed(1)} KB</span>
                        {file.status === "uploading" && (
                          <span className="flex items-center">
                            <span className="animate-spin h-3 w-3 border-2 border-primary border-t-transparent rounded-full mr-1"></span>
                            Uploading...
                          </span>
                        )}
                        {file.status === "success" && (
                          <span className="text-green-600 flex items-center">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            {file.message}
                          </span>
                        )}
                        {file.status === "error" && (
                          <span className="text-red-600 flex items-center">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            {file.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => removeFile(file.name)}
                    disabled={file.status === "uploading"}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="rounded-lg border p-4 bg-muted/20">
          <h3 className="font-medium mb-2">File Requirements</h3>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
            <li>CSV or Excel format (.csv, .xlsx)</li>
            <li>Maximum file size: 10MB</li>
            <li>Required columns: Name, Email, Class</li>
            <li>First row should contain column headers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BulkUploadStudents;
