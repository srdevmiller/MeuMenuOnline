module.exports = {
  apps: [{
    name: "meumenuonline",
    script: "npm",
    args: "start",
    env: {
      NODE_ENV: "production",
      PORT: 5000
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    error_file: "/var/log/pm2/meumenuonline-error.log",
    out_file: "/var/log/pm2/meumenuonline-out.log",
    merge_logs: true,
    log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    log_type: "json",
    exec_mode: "cluster",
    node_args: "--max-old-space-size=1024",
    restart_delay: 4000,
    wait_ready: true,
    kill_timeout: 3000,
    listen_timeout: 15000,
  }]
}